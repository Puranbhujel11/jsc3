const pii = {
    firstName: "Puran", 
    lastName: "Bhujel", 
    fullName: function(){
        return this.firstName + " " + this.lastName
        
    },

    ssN: function() {
        const socialSecurity = 12345;
        return socialSecurity;
        console.log(pii.socialSecurity());
    }
};
console.log(pii.fullName());


