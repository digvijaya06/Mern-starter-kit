const getUsers = (req, res) => {
    res.json([
        { _id: 1, name: "John Doe", email: "john@example.com" },
        { _id: 2, name: "Jane Doe", email: "jane@example.com" }
    ]);
};

const createUser = (req, res) => {
    const { name, email } = req.body;
    res.status(201).json({ message: "User created successfully", user: { name, email } });
};

module.exports = { getUsers, createUser };
