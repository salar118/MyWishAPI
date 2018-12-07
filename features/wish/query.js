var Wish = require("./model");

/**
 * 
 * @param {title of wish} title
 * @param {story of wish} story
 *  
 */
function createWish({
    title,
    story
}) {
    const wish = new Wish({
        title: title + Math.random(),
        story: story
    });

    const createdWish = wish.save();
    return createdWish;
}

/**
 * Finding wish by using:
 * 
 * @param {String} Title 
 */
function findWish({
    title
}) {
    return Wish.find({
        title
    });
}

module.exports = {
    createWish,
    findWish
};