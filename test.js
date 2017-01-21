// ready

/*
 $(function(){     }
 هذه معناها بعد ما تتحمل الصفحة كاملة من
 <html>  to   </html>
 ابدء تطبيق الاكواد التي بداخل
 {    }
 انا ابدأ اكتب اوامر جافا اسكربت مابيت الاقواس
 */
// $  تعني يا جافا اسكربت
/* # تعني
 استدعي ال
 id
 صاحب الاسم
 addBtn
 $("#addBtn")
 */
//$(".addBtn")  لو نقطة  .  معناها استدعي الكلاس صاحب الاسم الفالني  الاسم اللي انت هتكتبه
/* لو هتستدعي تاج نيم مثل
 body , div
 تكبت اسمه على طول من غير هاش تاج او نقطة
 $("body")
 */

/* .click(function(){        }
 معناها بعد الضغط نفذ الاوار مابين الاقواس
 {   }
 */

$(function ()
{
	// handling click even of addBtn
	$("#addBtn").click(function ()
	{


		/* .find("tbody").append("<tr><td>new 1</td><td>new 2</td></tr>")
		 ابحث عن الجدول
		 tbody
		 .append تعني
		 ثم ضيف عليه
		 صف وعامود ("<tr><td>new 1</td><td>new 2</td></tr>")
		 */
		var name = $("#name").val();
		var phone = $("#phone").val();
		var myTag="<tr><td>" + name + "</td><td>" + phone + "</td></tr>";
		$("#myTable").find("tbody").append(myTag)
	});
});