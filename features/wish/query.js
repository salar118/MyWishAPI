var Wish = require("./model");

async function createWish() {
    const wish = new Wish({
        title: 'title wish sd ' + Math.random(),
        story: 'story of wish'
    });

    const createdWish = await wish.save();
    return createWish;
}

async function findWish() {
    return await Wish.find();
}

module.exports = {
    createWish,
    findWish
}