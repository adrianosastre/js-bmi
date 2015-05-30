var BmiService = {
    getIndex: function (weight, height) {
        if (typeof(weight) !== 'number' || typeof(height) !== 'number')
            return null;
        
        return weight / (height * height);
    },

    getDescription: function () {
        //TODO to be implemented
        return "";
    }
};