$.ajax({
    url: "https://cloud.nemo.uni-freiburg.de/anon/usage/chart/nemo_site_usage/",
    dataType: "jsonp",
    statusCode: {
        200: function (response) {
            $('#statinfo').remove();
            $.getScript("/assets/js/tabs.js");
            $.getScript("/assets/js/highcharts/nemo_options.js");
            $.getScript("/assets/js/highcharts/nemo_today_usage.js");
            $.getScript("/assets/js/highcharts/nemo_day_usage.js");
            $.getScript("/assets/js/highcharts/nemo_site_usage.js");
            $.getScript("/assets/js/highcharts/nemo_field_usage.js");
            $.getScript("/assets/js/highcharts/nemo_type_usage.js");
            $.getScript("/assets/js/highcharts/nemo_rv_usage.js");
            $.getScript("/assets/js/highcharts/nemo_rv_lastyear.js");
            $.getScript("/assets/js/highcharts/nemo_rv_kwh_lastyear.js");
            $.getScript("/assets/js/highcharts/nemo_rv_top10.js");
            $.getScript("/assets/js/highcharts/nemo_cores_queued.js");
            $.getScript("/assets/js/highcharts/nemo_cores_free.js");
            $.getScript("/assets/js/highcharts/nemo_queue_cores.js");
            $.getScript("/assets/js/highcharts/nemo_queue_jobs.js");
            $.getScript("/assets/js/nemo_hide_chart_button.js");
        },
        404: function (response) {
            console.log('Status data unavailable');
            $('#statinfo').append('There are currently no publicly available statistics for NEMO2. \
                These may become available again at some undefined point in the future.');
            $('.tabs').remove();
            $('#nemo-queue').remove();
            $('#nemo-queue-text').remove();
            $('#nemo-usage-statistics').remove();
            $('#nemo-project-usage').remove();
            $('#tab-contentq').remove();
        },
    },
});
