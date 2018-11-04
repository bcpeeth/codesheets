let members = [

    { name: 'Jan', age: 21, gender: 'male' },
    
    { name: 'Bart', age: 39, gender: 'male' },
    
    { name: 'Marie', age: 62, gender: 'female' },
    
    { name: 'Jennie', age: 28, gender: 'female' }
    
    ]
    
     
    
    console.table( members )

    
    //Define the total age of members
    
    const totalAge = members.reduce((a, {age}) => a + age, 0);

    console.log( 'Total age', totalAge )



    //Define the total age of males


    const gender = ['male'];
    
    let filtered = members.filter( obj => obj.gender === 'male');
    
    console.log(filtered)


    
    
    const totalAgeOfMale = filtered.reduce((a, {age}) => a + age, 0);

    console.log('Total age of male', totalAgeOfMale)