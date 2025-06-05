function sortMedals(data, sortBy) {
        return [...data].sort((a, b) => {
            let sorted;
            if( sortBy === 'total'){
                sorted = (b.gold + b.silver + b.bronze) - (a.gold + a.silver + a.bronze);
            } else{
                sorted = b[sortBy] - a[sortBy];
            }

            if(sortBy=='total' && (b.gold + b.silver + b.bronze)==(a.gold + a.silver + a.bronze) ){
                sorted = b.gold - a.gold
            }

            if(sortBy=='gold' && b.gold==a.gold ){
                sorted = b.silver - a.silver
            }

            if(sortBy=='silver' && b.silver==a.silver ){
                sorted= b.gold - a.gold
            }

             if(sortBy=='bronze' && b.bronze==a.bronze ){
                sorted= b.gold - a.gold
            }


          return sorted;
        });
    }

    export default sortMedals;