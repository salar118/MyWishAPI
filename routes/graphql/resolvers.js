const wishFeature = require('../../features/wish/');

module.exports = {
    Query: {
        returnWish: async (parent, {}, context, info) => {
            const wish = await wishFeature.queries.createWish();
            console.log('wish will be created' + id);
            return wish;
        }
    }
}