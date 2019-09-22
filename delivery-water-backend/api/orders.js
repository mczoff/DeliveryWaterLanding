const api = {};

api.getAll = (Order) => (req, res) => {
    Order.find({}, (error, orders) => {
        if (error) throw error;

        if (!orders)
            res.status(401).send({ success: false, message: 'Failed.'});
        else {
            res.status(200).json({ success: true, message: 'Orders centers was received', orders: orders })
        }
    })
}

api.store = (Order) => (req, res) => {
    const order = new Order({
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        features: req.body.features,
        goods: req.body.goods,
    });

    order.save(error => {
        if (error)
            return res.status(400).json({success: false, message: error});

        res.status(200).json({success: true, message: "Order registered successfully"})
    })
}

module.exports = api