const express = require("express");
const app = express();

app.use(express.json());

let users = [{ marks: [] }];

app.get("/", function (req, res) {
    const krishMarks = users[0].marks;
    const totalMarks = krishMarks.length;
    let numberOfPosMarks = 0;

    for (let i = 0; i < totalMarks; i++) {
        if (krishMarks[i].pos) {  // Fix: Change `marks` to `pos`
            numberOfPosMarks++;
        }
    }

    const numberOfNegMarks = totalMarks - numberOfPosMarks;
    res.json({
        totalMarks,
        numberOfPosMarks,
        numberOfNegMarks
    });
});

// Middlewares
app.post("/", function (req, res) {
    const isPos = req.body.isPos;
    users[0].marks.push({ pos: isPos });

    res.json({ msg: "Done!" });
});

app.put("/", function (req, res) {
    for (let i = 0; i < users[0].marks.length; i++) {
        users[0].marks[i].pos = 1;  // Fix: Change `isPos` to `pos`
    }
    res.json({ msg: "Updated successfully!" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
