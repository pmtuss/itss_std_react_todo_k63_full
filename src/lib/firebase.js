import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAPlELRk6Yn4U9t3N1MrJ4FPLqPbq0TbJo",
  authDomain: "nhat-itss.firebaseapp.com",
  projectId: "nhat-itss",
  storageBucket: "nhat-itss.appspot.com",
  messagingSenderId: "528584037837",
  appId: "1:528584037837:web:27f3ad4c8412bc6b012084",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

const getFirebaseItems = async () => {
  const snapshot = await db.collection("todos").get();
  const items = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return items;
};

const addFirebaseItem = async (item) => {
  await db.collection("todos").add(item);
};

const updateFirebaseItem = async (item, id) => {
  await db.collection("todos").doc(id).update(item);
};

const deleteFirebaseItem = async (item) => {
  await db.collection("todos").doc(item.id).delete();
};

const storeUserInfo = async (user) => {
  const { uid } = user;
  const userDoc = await db.collection("users").doc(uid).get();
  if (!userDoc.exists) {
    await db.collection("users").doc(uid).set({ name: user.displayName });
    return {
      name: user.displayName,
      id: uid,
    };
  } else {
    return {
      id: uid,
      ...userDoc.data(),
    };
  }
}

const updateUser = async (user, image) => {
  try {
    const userDoc = await firebase.firestore().collection("users").doc(user.id).get();
    if (userDoc.exists) {
      await firebase.firestore().collection("users").doc(user.id).update({ ...userDoc.data(), image: image });
    }
  } catch (err) {
    console.log(err);
  }
}

export {
  auth,
  
  getFirebaseItems,
  addFirebaseItem,
  updateFirebaseItem,
  deleteFirebaseItem,

  storeUserInfo,
  updateUser,
};

export default firebase;
