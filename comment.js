let checkedComment = 0; //체크한 댓글 개수 

test()

function test(){
  setInterval(() => {

    let commentList =document.getElementsByTagName("ytd-comment-thread-renderer")
    let commentCount = commentList.length
    // console.log(`현재까지 불러온 댓글수 : ${commentCount}`)
    let regCheck = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;  

    for (let i = checkedComment; i < commentCount ; i++) {
      checkedComment++;
      // console.log(`${checkedComment}번째 댓글 체크중`)
      let commentText = commentList[i].childNodes[2].childNodes[2].childNodes[3].childNodes[3].childNodes[2].innerText;
      if(!regCheck.test(commentText)){
        // console.log(`${i}번째 댓글에는 한글이 없다.`)
        commentList[i].style = 'display:none'
      } else {
        // console.log(`${i}번째 댓글에는 한글이 있다.`)
      }
    }
  }, 2000);
}