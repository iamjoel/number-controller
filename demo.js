require.config({
    paths: { // 配置路径的缩写
        'number-controller': './number-controller',
        'number-controller-template': './number-controller-template.html',
        'number-controller-css': './number-controller'
    },
    map: { // 配置插件
        '*': {
            'css': 'vendor/require-css', // 加载css插件
            'text': 'vendor/require-text' // 加载模板文件插件
        }
    }
});

$(document).ready(function() {
    require(['number-controller'], function(NumberController) {
        // basic
        new NumberController({
            wrap: $('#basic-number-controller-wrap'),
        });

        var numberController = new NumberController({
            wrap: $('#number-controller-wrap'),
            step: 1.1,
            init: 10,
            min: 6,
            max: 15,
            onChange: function(newVal, oldVal) {
                console.log(newVal, oldVal) ;
            }
        });
        $('#get-num-btn').click(function(){
            console.log(numberController.getNumber());
        });
    });
});
