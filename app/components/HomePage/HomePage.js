import React from 'react'
import Bio from '../Bio/Bio'
import BooksList from '../BooksList/BooksList'
import MessagesList from '../MessagesList/MessagesList'


class HomePage extends React.Component {
    render () {
        return  (
          <main>
            <MessagesList />
            <Bio
                myName="John Hearn"
                age={38}
                pronoun={{
                    nominative: 'he',
                    accusative: 'him',
                    possessive: 'his',
                    reflexive:  'himself'
                }}
                favoriteActivity='Swift'
            />
            <BooksList />
          </main>
        )
    }
}


export default HomePage
