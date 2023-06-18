import { Schema, model, models } from 'mongoose';

const AnimalSchema = new Schema({
    id: {
        type: String,
        required: [true, 'ID is required.']
    },
    title: {
        type: String,
        required: [true, 'Title is required.'],
    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
    },
    body: {
        type: String,
        required: [true, 'Body is required.'],
    },
    image: {
        type: String,
        required: [true, 'Image is required']
    }
});

const Animal = models.Animal || model('Animal', AnimalSchema);

export default Animal;