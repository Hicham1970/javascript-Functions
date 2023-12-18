const trimCor = {
    trim: function () {
        return this.draftAft - this.draftFor;
    },
};

const initial = {
    draftFor: 3.5, 
    draftAft: 4.2,
} 
let tr = trimCor.trim.call(initial); 

console.log(tr); 

//Todo : found a way to calculate the correction of the observed drafts with this method.