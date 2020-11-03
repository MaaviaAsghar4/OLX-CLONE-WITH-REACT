import firebase from '../../Config/firebase'
// import firebase from 'firebase'

// console.log(Firebase)
const alter_data = () => {
    console.log("Running");

}

const set_data = (data) => {
    return dispatch => {
        dispatch({ type: 'SETDATA', data: data })
    }
}

const auth_data = () => {
    return dispatch => {
        // var user =''
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function (result) {
            var token = result.credential.accessToken;
            var user = result.user;
            console.log(token)
            dispatch({ type: 'SetUser', user: user })
        }).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorCode, email, credential)
            console.log(errorMessage)
        });

        //   dispatch({type: "SETIMG", img: user.photoURL})
    }
}

const sign_out = () => {
    return dispatch => {
        firebase.auth().signOut().then(function () {
            dispatch({ type: "SignOut" })
        }).catch(function (error) {
            console.log(error)
        });
    }

}

const chat_data = (uid1, uid2, chat) => {
    return dispatch => {
        let mergerUid = ''
        if (uid1 > uid2) {
            mergerUid = uid1 + uid2
        } else {
            mergerUid = uid2 + uid1
        }
        firebase.database().ref('/').child(mergerUid).on('child_added', senderDetail => {
            let senderInfo = []
            senderInfo.push(senderDetail.val())
            dispatch({ type: "SetChat", senderDetail: senderInfo })
        })
        let key = firebase.database().ref(mergerUid).push().key;
        chat.key = key;
        firebase.database().ref(`${mergerUid}`).child(key).set(chat)
    }
}

export {
    alter_data,
    set_data,
    auth_data,
    sign_out,
    chat_data
}