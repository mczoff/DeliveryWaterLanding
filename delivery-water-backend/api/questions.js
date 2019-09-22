const api = {};

api.getAll = (Question) => (req, res) => {
    Question.find({}, (error, questions) => {
        if (error) throw error;

        if (!orders)
            res.status(401).send({ success: false, message: 'Failed.'});
        else {
            res.status(200).json({ success: true, message: 'Questions centers was received', questions: questions })
        }
    })
}

api.store = (Question) => (req, res) => {
    const question = new Question({
        name: req.body.firstName,
        email: req.body.middleName,
        phone: req.body.lastName,
        text: req.body.email,
    });

    question.save(error => {
        if (error)
            return res.status(400).json({success: false, message: error});

        res.status(200).json({success: true, message: "Questions registered successfully"})
    })
}

module.exports = api