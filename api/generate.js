export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Only POST requests are allowed"
        });
    }

    try {
        const { prompt, style } = req.body;

        if (!prompt) {
            return res.status(400).json({
                error: "Prompt is required"
            });
        }

        const finalPrompt = `${prompt}. Style: ${style || "cinematic"}.`;

        const response = await fetch(
            "https://api.openai.com/v1/images/generations",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: "gpt-image-1",
                    prompt: finalPrompt,
                    size: "1024x1024"
                })
            }
        );

        const data = await response.json();

        if (!response.ok) {
            return res.status(response.status).json({
                error: data.error?.message || "Image generation failed"
            });
        }

        return res.status(200).json(data);

    } catch (error) {
        return res.status(500).json({
            error: "Server error"
        });
    }
}
