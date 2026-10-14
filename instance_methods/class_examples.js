class person {
    constructor(name, id, address) {
        this.pName = name
        this.pId = id
        this.pAddress = address
    }

    getPersonData() {
        if (this.pName == "naveen" && this.pId == 84678) {
            return "correct name entred"
        } else {
            return "wrong name entred";
        }
    }
}

const personDetails = new person("naveen", 84678, "hyderabad");
document.write(personDetails.getPersonData());
