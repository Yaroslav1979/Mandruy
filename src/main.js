
// $(function(){
//     $('.icon-openanswer').on('click', function() {
//         const btn = $(this);

//         $.ajax({
//             url: 'src/component/openAnswer.hbs',
//             type: 'GET',
//             success: function (response) {
//                 setTimeout(function(){
//                     $('.answer-text').after(response);
//                 }, 1000);
//             },
//             error: function() {
//                 alert('Error');
//             }
//         });
//     });
// });

<script>
    $(function(){
        $('.icon-openanswer').on('click', function() {
            const btn = $(this);

            // Опціонально, ви можете визначити текст, який ви хочете вставити
            const текст = "Ваш певний текст";

            // Вставка тексту під кнопкою
            btn.after(текст);
        });
    });
</script>