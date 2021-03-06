var articles = [{
    "idx" : 1,
    "memIdx" : 1,
    "name" : "임태희",
    "content" : "내용1",
    "date" : "작성날짜1",
    "좋아요" : 1,
    "댓글수" : 6,
    "신고수" : 2,
    "삭제여부" : "N",
    "카테고리" : "1",
    "파일여부" : "N",
    "댓글" : []
},{
    "idx" : 2,
    "memIdx" : 1,
    "name" : "임태희",
    "content" : "내용2",
    "date" : "작성날짜2",
    "좋아요" : 2,
    "댓글수" : 3,
    "신고수" : 1,
    "삭제여부" : "N",
    "카테고리" : "1",
    "파일여부" : "N",
    "댓글" : []
},{
    "idx" : 3,
    "memIdx" : 1,
    "name" : "임태희",
    "content" : "내용2",
    "date" : "작성날짜2",
    "좋아요" : 2,
    "댓글수" : 3,
    "신고수" : 1,
    "삭제여부" : "N",
    "카테고리" : "1",
    "파일여부" : "N",
    "댓글" : []
},{
    "idx" : 4,
    "memIdx" : 1,
    "name" : "임태희",
    "content" : "내용2",
    "date" : "작성날짜2",
    "좋아요" : 2,
    "댓글수" : 3,
    "신고수" : 1,
    "삭제여부" : "N",
    "카테고리" : "1",
    "파일여부" : "N",
    "댓글" : []
},{
    "idx" : 2,
    "memIdx" : 1,
    "name" : "임태희",
    "content" : "내용2",
    "date" : "작성날짜2",
    "좋아요" : 2,
    "댓글수" : 3,
    "신고수" : 1,
    "삭제여부" : "N",
    "카테고리" : "1",
    "파일여부" : "N",
    "댓글" : []
},{
    "idx" : 6,
    "name" : "유재면",
    "content" : "내용6",
    "date" : "작성날짜6",
    "좋아요" : 6,
    "댓글수" : 1
},{ 
    "idx" : 7,
    "name" : "구현수",
    "content" : "내용7",
    "date" : "작성날짜7",
    "좋아요" : 7,
    "댓글수" : 1
},{
    "idx" : 8,
    "name" : "유제이",
    "content" : "내용8",
    "date" : "작성날짜8",
    "좋아요" : 8,
    "댓글수" : 1
},{
    "idx" : 9,
    "name" : "한주연",
    "content" : "내용9",
    "date" : "작성날짜9",
    "좋아요" : 9,
    "댓글수" : 1
},{
    "idx" : 10,
    "name" : "유영진",
    "content" : "내용10",
    "date" : "작성날짜10",
    "좋아요" : 10,
    "댓글수" : 1
},{
    "idx" : 11,
    "name" : "박수정",
    "content" : "내용11",
    "date" : "작성날짜11",
    "좋아요" : 11,
    "댓글수" : 1
},{
    "idx" : 12,
    "name" : "이준석",
    "content" : "내용12",
    "date" : "작성날짜12",
    "좋아요" : 12,
    "댓글수" : 1
}
]

const getPosts = (number) => {
    // generate a number of posts
    // in a real setting, this would be a database call or algorithm

    let ret = []

    for (var i = 0; i < number; i++){
        ret.push(articles[i]) 
    }

    return ret
}

export default getPosts