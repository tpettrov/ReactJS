/**
 * Created by Toni on 7/2/2017.
 */
const data = {

    getBooks: () => {

        return new Promise((resolve, reject) =>{

            resolve([

                {id: 1, title: 'PHP', author: 'Me', date: new Date(2016,5,24), comments: [{id: 1, content: 'First comment', author: 'Me'}, {id: 2, content: 'Second comment'}]},
                {id: 2, title: 'C#', author: 'Nakov', date: new Date(2002,5,24), comments: [{id: 1, content: 'First comment', author: 'Me'}]},
                {id: 3, title: 'Javascript', author: 'Tesla', date: new Date(2001,5,24), comments: [{id: 1, content: 'First comment'}]},
                {id: 4, title: 'React', author: 'Somebody', date: new Date(98,5,24), comments: [{id: 1, content: 'First comment'}]},
                {id: 5, title: 'Angular', author: 'Clark', date: new Date(99,5,24), comments: [{id: 1, content: 'First comment'}]},
                {id: 6, title: 'MongoDb', author: 'John', date: new Date(97,5,24), comments: [{id: 1, content: 'First comment'}]},
                {id: 7, title: 'SedmaBook', author: 'Oliver', date: new Date(2017,5,24), comments: [{id: 1, content: 'First comment'}]}
            ])

        })

    }

}

export default data