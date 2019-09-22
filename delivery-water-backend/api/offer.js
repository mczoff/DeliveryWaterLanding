const api = {};

api.getAll = (Offer) => (req, res) => {
    Offer.find({}, (error, offers) => {
        if (error) throw error;

        if (!offers)
            res.status(401).send({ success: false, message: 'Failed.'});
        else {
            res.status(200).json({ success: true, message: 'Offers centers was received', offers: offers })
        }
    })
}

module.exports = api