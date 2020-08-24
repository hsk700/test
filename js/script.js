$(document).ready(function(){
    /*************************************
    *      GNB hover , Dep 2 Display     *
    *************************************/

    // GNB 마우스 오버 : hover클래스 추가
    $("#gnbSec li").hover(function(){
        var $index = $(this).index()+1;
        $("#dep2Sec ul").removeClass("hover");
        $("#dep2Sec ul").removeClass("on");
        $("#dep2Sec ul.subMenu0"+$index).addClass("hover");
    }, function(){
        
    });
    /*****************************************
    // GNB 클릭 : 해당 Dep2 메뉴 on 클래스 추가
    $("#gnbSec li").click(function(){
        var $index = $(this).index()+1;
        var $subMenu = $("#dep2Sec ul.subMenu0"+$index);
        var $on = $("#dep2Sec ul.subMenu0"+$index).hasClass("on")
                
        $("#dep2Sec ul").removeClass("on");
        if($on!=true){
            $subMenu.addClass("on");
        }else{
            $subMenu.removeClass("on");
        }
    });
    ********************************************/


    /*************************************
    *       sub01 page popup button      *
    *************************************/
    $("#openPopupSub01-request").click(function(){
        $("#popupSub01-request").fadeIn(300);
        return false;
    });
    
    $("#popupSub01_cancel").click(function(){
        $("#popupSub01-request").fadeOut(300);
        return false;
    });

    /********* sub01 Tab Section  *********/
    $("#openSub01-2_basic").click(function(){
        $(this).addClass("on");
        $("#sub01-2_basic").addClass("on");

        $("#openSub01-2_payment").removeClass("on");        
        $("#sub01-2_payment").removeClass("on");
    });

    $("#openSub01-2_payment").click(function(){
        $(this).addClass("on")
        $("#sub01-2_payment").addClass("on");
        $("#openSub01-2_basic").removeClass("on");
        $("#sub01-2_basic").removeClass("on");
    });
    /******** //sub01 Tab Section  ********/

    $(".openPopupSub01-detail").click(function(){
        $("#popupSub01-detail").fadeIn(300);
        return false;
    });

    $("#popupSub01-detail_cancel").click(function(){
        $("#popupSub01-detail").fadeOut(300);
        return false;
    });

    /*************************************
    *       sub03 page popup button      *
    *************************************/
    $(".sub03_deleteRow").click(function(){
        $("#popupSub03-delete").fadeIn(300);
    });

    $("#popupSub03-delete_cancel").click(function(){
        $("#popupSub03-delete").fadeOut(300);
    });

    /*************************************
    *       sub04 page popup button      *
    *************************************/
    $("#openPopupSub04-confirm").click(function(){
        $("#popupSub04-confirm").fadeIn(300);
        return false;
    });

    $("#popupSub04-confirm_cancel").click(function(){
        $("#popupSub04-confirm").fadeOut(300);
        return false;
    });

    $("#openPopupSub04-ready").click(function(){
        $("#popupSub04-ready").fadeIn(300);
        return false;
    });

    $("#popupSub04-ready_cancel").click(function(){
        $("#popupSub04-ready").fadeOut(300);
        return false;
    });

    /*************************************
    *       sub05 page popup button      *
    *************************************/
    //등록버튼 클릭
    $("#openPopupSub05-regit").click(function(){
        $("#popupSub05-regit").fadeIn(300);
        return false;
    });

    $("#popupSub05-regit_cancel").click(function(){
        $("#popupSub05-regit").fadeOut(300);
        return false;
    });

    $(".openPopupSub05-modify").click(function(){
        $("#popupSub05-modify").fadeIn(300);
        $("#popupSub05-modify_pwChangeOpen1, #popupSub05-modify_pwChangeOpen2").hide();
        $("#popupSub05-modify_pwChange").show();
        return false;
    });

    $("#popupSub05-regit_pwchangeBtn").click(function(){
        $("#popupSub05-modify_pwChangeOpen1, #popupSub05-modify_pwChangeOpen2").show();
        $("#popupSub05-modify_pwChange").hide();
    });

    $("#popupSub05-modify_cancel").click(function(){
        $("#popupSub05-modify").fadeOut(300);
    });

    /*************************************
    *    sub01 page add/del row button   *
    *************************************/
    // +추가 버튼 클릭
    $("#addRow").click(function(){
        var $row = `
            <tr>
                <th scope="row"></th>
                <td><input type="checkbox"></td>
                <td><input type="text" name="" id=""></td>
                <td><input type="text" name="" id=""></td>
                <td><input type="text" name="" id=""></td>
                <td><input type="text" name="" id=""></td>
                <td><input type="text" name="" id=""></td>
                <td><input type="text" name="" id=""></td>
                <td><input type="text" name="" id=""></td>
                <td><input type="text" name="" id=""></td>
                <td><button type="button" class="btn-white deleteRow">삭제</button></td>
            </tr>
        `
        var $tr = $("#dataTable tbody tr").length;

        $("#dataTable tbody").append($row);
        $("#dataTable tbody tr:last-child th").append($tr+1);
    });
    // 삭제 버튼 클릭
    $("#dataTable .deleteRow").click(function(){
        $(this).closest("tr").remove();
    });

    
   
    //삭제버튼 클릭
    $("#openPopupSub05Delete").click(function(){
        $("#popupSub05Delete").fadeIn(300);
    });

    $("#popupSub05DeleteCancel").click(function(){
        $("#popupSub05Delete").fadeOut(300);
        return false;
    });

    // 수정버튼 클릭
    $("#openPopupSub05Modify").click(function(){
        $("#popupSub05Modify").fadeIn(300);
    });

    $("#popupSub05ModifyCancel").click(function(){
        $("#popupSub05Modify").fadeOut(300);
        return false;
    });

    /*************************************
    *       sub06 page popup button      *
    *************************************/
    //영수증 양식 선택버튼 클릭
    $("#openPopupSub06-2BillTypeView").click(function(){
        $("#popupSub06-2BillType").fadeIn(300);
    });

    //팝업 취소버튼 클릭
    $("#popupSub06-2Cancel").click(function(){
        $("#popupSub06-2BillType").fadeOut(300);
    });


    /*************************************
    *    sub06 page file upload button   *
    *************************************/
    //로고 찾아보기 버튼 클릭 -> 텍스트박스에 경로 보여주기
    $("#sub06-1-1_logo").change(function(){
        var fileName = $("#sub06-1-1_logo").val();
        $("#sub06-1-1_logoTitle").val(fileName);
    });

    //배경 찾아보기 버튼 클릭 -> 텍스트박스에 경로 보여주기
    $("#sub06-1-1_bg").change(function(){
        var fileName = $("#sub06-1-1_bg").val();
        $("#sub06-1-1_bgTitle").val(fileName);
    });
});