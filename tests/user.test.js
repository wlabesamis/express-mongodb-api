const request = require('supertest');
const app = require('../src/app');
const User = require('../src/models/userModel');
const { connectDB, closeDB }= require('../src/database/mongo')

beforeAll(async () => {
    await connectDB();
});

afterAll(async () => {
    await closeDB();
});

afterEach(async () => {
    await User.deleteMany({});
});

describe('User API', () => {
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({
                name: 'John Doe',
                age: 30
            });
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('_id');
    });

    it('should get a user by id', async () => {
        const user = new User({ name: 'John Doe', age: 30 });
        await user.save();

        const res = await request(app).get(`/api/users/${user._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('name', 'John Doe');
    });

    it('should delete a user by id', async () => {
        const user = new User({ name: 'John Doe', age: 30 });
        const newUser = await user.save();

        const res = await request(app).delete(`/api/users/${user._id}`);
        expect(res.statusCode).toEqual(200);
        expect(res.body._id).toEqual(`${newUser._id}`);
    });

    it('should get a list of users', async () => {
        const user1 = new User({ name: 'John Doe', age: 30 });
        const user2 = new User({ name: 'Jane Doe', age: 25 });
        await user1.save();
        await user2.save();

        const res = await request(app).get('/api/users');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(2);
    });
});
