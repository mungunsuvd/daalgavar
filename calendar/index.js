// JavaScript source code
var calendar2021 = {jan: {1: "Сайхан амарна"}, 
                    feb: {1: "Сагсны тэмцээнтэй", 3: "Шагнал гардуулна даа", 17: "Жавхлан багшийн лаб 2-ыг хийнэ"}, 
                     mar: {2: "Энэ лабынхаа хугацааг сунгах уу яах вэ гэдэгээ шийднэ", 6: "Энд юу бичье дээ байз", 8: "Эмэгтэйчүүддээ баяр хүргэнэ дээ"}, 
                     apr: {1: "Бүгдээрээ худлаа ярьцаагаагаарай"},
                     may: {10: "Энэ сард ч ёстой юу ч болдоггүй сар даа"}, 
                     jun: {6: "Жавхлан багшийн төрсөн өдөр"},  
                     jul: {4: "Хичээл амарсаан ураа"},
                     aug: {1: "Хөдөө явдаг цаг даа", 25: "Хичээл сонголт эхэллээ"}, 
                     sep: {1: "9-н сарын нэгэн боллоо ерөөсөө бидний баяр даа"}, 
                     oct: {13: "Сур сур бас дахин сур"}, nov: {2: "Сурсаар л бай"}, 
                     dec: {20: "Өвлийн семистер хаагдах нь дээ", 30: "Дүн гаргаж дууслаа баярлалаа баяртай"} 
        }
        
        var monthName = ['January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August', 'September', 'October',
        'November', 'December'];

        function calendarPrint(){
                 var current = new Date(2021, 1, 0);
                 var htmlCreator = '';

                 htmlCreator += '<tr class="header"><td>Mon</td><td>Tue</td><td>Wed</td><td>Thur</td><td>Fri</td><td>Sat</td><td>Sun</td></tr><tr>';
                
                 for
                 for(var i=1; i<=current.getDate(); i++){  
                     if(i%7 == 0) {
                          console.log('huvaagdav');
                          htmlCreator += '</tr><tr>;
                  } 
                  if(calendar2021['jan'][i]){
                        htmlCreator += '<td class="event">'+i+'</td>';
                 }
                 htmlCreator += '</\tr>';

                 document.querySelector('.test').innerHTML = htmlCreator;
                 console.log(current);
        
        }
        calendarPrint();
        //console.log(calendar2021['jan'][1]);