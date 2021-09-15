let postTitleList = [
    {
        id:'news_item',
        title:'STOCK NEWS'
    },
    {
        id:'posts_item',
        title:'BLOG POSTS'
    },
    {
        id:'ideas_item',
        title:'NEW IDEAS'
    },
]
const resetCurrentPostCategory = (id)=>{
    $(".postCategory > .item").removeClass('active');
    $(`#${id}`).addClass('active');
    let currentCategory = postTitleList.find((item)=>item.id == id)
    //console.log(titleIndex)
    $('.postContent > .title').html(currentCategory.title)
}
$(".postCategory > .item").click(function(){
    resetCurrentPostCategory($(this).attr("id"));
})
resetCurrentPostCategory('news_item')