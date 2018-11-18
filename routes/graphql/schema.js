const graphql = require('graphql');
const _ = require('loadsh');

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

const wishes = [{
    title: '1',
    story: "first story"
}, {
    title: '2',
    story: 'second story'
}];

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
            resolve(parentValue, {
                title
            }) {
                return wishes[1];
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
