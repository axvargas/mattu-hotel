exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allDatoCmsRoom{
                nodes{
                    slug
                }
            }
        }
    `);
    // console.log(result.data.allDatoCmsRoom.nodes);

    // In case of an ERROR
    if (result.errors) {
        reporter.panic("There was an error my bro", result.errors);
    }

    //In case of success, that means that there are pages o generate
    const rooms = result.data.allDatoCmsRoom.nodes;
    rooms.forEach(room => {
        actions.createPage({
            path: room.slug,
            component: require.resolve('./src/components/room/index.js'),
            context: {
                slug: room.slug
            }
        });
    });
}
