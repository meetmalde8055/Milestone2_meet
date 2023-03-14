const {v4: uuid} = require('uuid')

const categories = ["Women Clothing", "Men Clothing"]

const trades = [
    {
        id: '1', 
        title: 'Blue Hat',
        category:'Women Clothing',
        details: 'It is a blue hat for women', 
        status:'Available',
        image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.aliexpress.com%2Fitem%2F32911063710.html&psig=AOvVaw0OeBE_sZuehs2T_cDxwBq7&ust=1678840465970000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCODyoaCW2v0CFQAAAAAdAAAAABAE'

    },
    {
        id: '2', 
        title: 'Green Hat',
        category:'Women Clothing',
        details: 'It is a green hat for women', 
        status:'Not Available',
        image: 'https://i.pinimg.com/736x/c4/79/6c/c4796c3050fdbf4fbfd5493cac9912a2.jpg'

    },
    {
        id: '3', 
        title: 'Pink Hat',
        category:'Women Clothing',
        details: 'It is a pink hat for women', 
        status:'Available',
        image: 'https://www.https://images.footballfanatics.com/nike/mens-nike-pink-futura-heritage86-adjustable-hat_ss5_p-4819948+pv-1+u-fccspklaiozcxp9rogjr+v-qi4okmo0d7ssiyeqybul.jpg?_hv=2&w=900.com/url?sa=i&url=https%3A%2F%2Fwww.aliexpress.com%2Fitem%2F32911063710.html&psig=AOvVaw0OeBE_sZuehs2T_cDxwBq7&ust=1678840465970000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCODyoaCW2v0CFQAAAAAdAAAAABAE'

    },
    {
        id: '4', 
        title: 'Blue Shoes',
        category:'Men Clothing',
        details: 'Blue shoes for men', 
        status:'Available',
        image: 'https://i.https://i8.amplience.net/s/scvl/127450_271490_SET/1?fmt=auto&$webPdpProduct$.com/736x/c4/79/6c/c4796c3050fdbf4fbfd5493cac9912a2.jpg'

    },
    {
        id: '5', 
        title: 'Green Shoes',
        category:'Men Clothing',
        details: 'Green Shoes for men', 
        status:'Available',
        image: 'https://www.google.https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8ef5e089-8a1f-410b-aa07-12855268ff5e/lebron-9-low-mens-shoes-flHVJd.png/url?sa=i&url=https%3A%2F%2Fwww.aliexpress.com%2Fitem%2F32911063710.html&psig=AOvVaw0OeBE_sZuehs2T_cDxwBq7&ust=1678840465970000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCODyoaCW2v0CFQAAAAAdAAAAABAE'

    },
    {
        id: '6', 
        title: 'Pink Shoes',
        category:'Men Clothing',
        details: 'Pink Shoes for women', 
        status:'Not Available',
        image: 'http://d13y5iorv6bymp.cloudfront.net/image/cache/catalog/--a999960/TB2lAkEuXXXXXaAXpXXXXXXXsXXX_!!335037265_cr-800x800.jpg'
    },
    

];

exports.find = () => trades;

exports.findById = (id) => {
    return trades.find(item=>item.id===id) 
}

exports.updateById = (id, newStory) => {
    let item = trades.find(item=>item.id===id)
    if(item) {
        item.title = newStory.title;
        item.category = newStory.category;
        item.details = newStory.details;
        item.status = newStory.status;
        item.image = newStory.image;
        return true
    } else {
        return false
    }
}

exports.deleteById = function(id) {
    let index = trades.findIndex(item => item.id === id)
    if(index != -1) {
        trades.splice(index, 1);
        return true;
    } else {
        return false
    }
}

exports.findCategories = () => {
    return categories;
}

exports.save = (item) => {
    item.id = uuid()
    trades.push(item)
    if(!categories.includes(item.category))
    {
        categories.push(item.category)
    }
}
