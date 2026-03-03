import pdf from 'pdf-parse'

export async function interviewController(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        const data = await pdf(req.file.buffer);

        res.json({
            text: data.text.trim()
        });

    } catch (error) {
        console.error("REAL ERROR:", error);
        res.status(500).json({
            message: "Internal server error"
        });
    }
}