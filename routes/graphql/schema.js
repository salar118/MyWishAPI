const graphql = require('graphql');
const wishFeature = require('../../features/wish/');

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    RootQueryType,
    GraphQLInputObjectType

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
                const result = await wishFeature.queries.createWish({
                    title: 'wish',
                    story: 'Story of wish'
                });
                return result[0];
            }
        }
    }
});

const wishInput = new GraphQLInputObjectType({
    name: "WishInput",
    fields: () => ({
        title: {
            type: GraphQLString
        },
        story: {
            type: GraphQLString
        }
    })
});

const mutationType = new GraphQLObjectType({
    name: "WishMutationType",
    fields: {
        findWish: {
            type: WishType,
            args: {
                wishInput: {
                    type: wishInput
                }
            },
            resolve: async (parent, {
                wishInput
            }, context, info) => {
                const result = await wishFeature.queries.findWish({
                    title: wishInput.title
                });
                return result[0];
            }
        },
        createWish: {
            type: WishType,
            args: {
                wishInput: {
                    type: wishInput
                }
            },
            resolve: async (parent, {
                wishInput
            }, context, info) => {
                const result = await wishFeature.queries.createWish({
                    title: wishInput.title,
                    story: wishInput.story
                });
                return result;
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: mutationType
});