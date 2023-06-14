// below used as default to keep Guest Orders shape consistent with User orders stored on database
const guestObjShape = ({
    fullname: "guest",
    admin: false,
    order: {
        id: 0,
        orderstatus: 'active',
        cart_items: []
    }
})

// Functions relating to dealing with storage and retrieval of Guest Cart. Session storage used for development, however switch to LocalStorage could be possible
export const guestAPI = {
    guestObj: function () {
        return guestObjShape
    },
    defaultCart: function () {
    return guestObjShape
    },
    setGuestCart: function (currCart) {
        sessionStorage.removeItem("guestCart");

        const JSONcart = JSON.stringify(currCart)
        sessionStorage.setItem("guestCart", JSONcart)
    },
    getGuestCart: function () {
        let JSONguestCart = sessionStorage.getItem("guestCart")
        let JSONguestCart2 = JSON.parse(JSONguestCart)
        return JSONguestCart2
    },
    AddGuestCart: function () {
        const guestCart = sessionStorage.getItem("guestCart")
        return JSON.parse(guestCart)
    },
    clearGuestCart: function () {
        sessionStorage.removeItem("guestCart");
    }
}