const Bicycle = require('../models/Bicycle');

exports.getBicycles = async (req, res) => {
    const { category, minPrice, maxPrice, condition, location, sortBy, page = 1, limit = 10 } = req.query;
    const filter = {};

    if (category) filter.category = category;
    if (minPrice) filter.price = { ...filter.price, $gte: minPrice };
    if (maxPrice) filter.price = { ...filter.price, $lte: maxPrice };
    if (condition) filter.condition = condition;
    if (location) filter.location = location;

    const sortOptions = {};
    if (sortBy) {
        const [field, order] = sortBy.split(':');
        sortOptions[field] = order === 'desc' ? -1 : 1;
    }

    try {
        const bicycles = await Bicycle.find(filter)
            .sort(sortOptions)
            .skip((page - 1) * limit)
            .limit(Number(limit));

        const total = await Bicycle.countDocuments(filter);
        res.json({ bicycles, total });
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.createBicycle = async (req, res) => {
    try {
        const bicycle = new Bicycle(req.body);
        await bicycle.save();
        res.status(201).send(bicycle);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};

exports.addBicycles = async (req, res) => {
    try {
        const bicycles = req.body;
        if (!Array.isArray(bicycles)) {
            return res.status(400).send('Request body should be an array of bicycles');
        }

        const result = await Bicycle.insertMany(bicycles);
        res.status(201).send(result);
    } catch (err) {
        res.status(500).send('Server Error');
    }
};
