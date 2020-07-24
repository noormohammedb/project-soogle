single_result = document.querySelector(".re-con");
for(i=0;i<7;i++){
    clone = single_result.cloneNode(true);
    single_result.parentElement.append(clone);
}