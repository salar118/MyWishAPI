const graphql = require('graphql');
const wishFeature = require('../../features/wish/');

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    RootQueryType

} = graphql;

const WishType = new GraphQLObjectType({
    name: 'Wish',
    fields: {
        title: {
            type: GraphQLString
        },
        story: {
            type: GraphQLString
        }
    }
});

// const w = wishFeature.queries.createWish();

// const wishes = [{
//     title: '1',
//     story: "first story"
// }, {
//     title: '2',
//     story: 'second story'
// }];


//Root query for exposing wishes
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        wish: {
            type: WishType,
            args: {
                title: {
                    type: GraphQLString
                }
            },
            resolve: async (parent, {}, context, info) => {
                const result = await wishFeature.queries.findWish();
                return result[0];
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});