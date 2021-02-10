<template>
  <div
      class="chart-wrapper"
      v-if="hasData"
  >
    <highcharts
        :constructor-type="'stockChart'"
        :options="chartOptions"
    ></highcharts>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import Highcharts from 'highcharts'
import stockInit from 'highcharts/modules/stock'

stockInit(Highcharts)

export default {
  name: 'BaseChart',
  data() {
    return {
      chartOptions: {
        type: 'line',
        title: {
          text: '',
        },
        series: [],
        colors: ['#8E44AD', '#7FB3D5', '#F4D03F', '#F1948A'],
        legend: {
          enabled: true,
          align: 'center',
          verticalAlign: 'top',
          itemStyle: {
            fontFamily: '"Montserrat", "sans-serif"',
            textTransform: 'uppercase',
          }
        },
        style: {
          fontFamily: '"Montserrat", "sans-serif"',
          textTransform: 'uppercase',
        },
        tooltip: {
          shared: true,
          split: false,
          style: {
            fontFamily: '"Montserrat", "sans-serif"',
            textTransform: 'uppercase',
          },
        },
        xAxis: [{
          tickInterval: 50,
        }],
        navigator: {
          handles: {
            backgroundColor: '#979A9A',
          },
          height: 60,
          maskFill: 'rgba(81, 46, 95, .1)',
        },
        scrollbar:{
          barBackgroundColor: '#979A9A',
          height: 12,
          barBorderWidth: 0,
        },
        rangeSelector: {
          buttons: [
              {
                type: 'month',
                count: 1,
                text: '1',
                title: 'View 1 month'
              },
              {
                type: 'month',
                count: 3,
                text: '3',
                title: 'View 3 months'
              },
              {
                type: 'month',
                count: 6,
                text: '6',
                title: 'View 6 months'
              },
              {
                type: 'year',
                count: 1,
                text: '12',
                title: 'View 1 year'
              },
              {
                type: 'all',
                text: 'All',
                title: 'View all'
              }
          ],
          buttonTheme: {
            style: {
              color: '#6C3483',
              fontFamily: '"Montserrat", "sans-serif"',
              fontWeight: 'bold',
              textTransform: 'uppercase',
            },
            states: {
              select: {
                fill: '#6C3483',
                style: {
                  color: 'white',
                  textTransform: 'uppercase',
                }
              }
            }
          },
          inputBoxBorderColor: '#797D7F',
          inputBoxWidth: 120,
          inputBoxHeight: 18,
          inputStyle: {
            color: '#6C3483',
            fontFamily: '"Montserrat", "sans-serif"',
            textTransform: 'uppercase',
          },
        },
      }
    }
  },
  computed: {
    ...mapGetters(['hasData', 'items']),
  },
  methods: {
    getChartData() {
      for (let item of this.items) {
        let series = {}
        series.name = item.name
        series.data = item.data.map(elem => { return [elem.date, elem.value] })
        series.showInNavigator = true
        this.chartOptions.series.push(series)
      }
    },
  },
  mounted() {
    this.getChartData()
  },
  updated() {
    this.getChartData()
  }
}
</script>

<style scoped>
.chart-wrapper {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #909497;
  box-shadow: 10px 10px 5px -8px rgba(176, 176, 176, 1);
}

::-webkit-scrollbar {
  height: 10px;
}

::-webkit-scrollbar-track {
  background: #F0F3F4;
}

::-webkit-scrollbar-thumb {
  background: #979A9A;
}

::-webkit-scrollbar-thumb:hover {
  background: #7B7D7D;
}
</style>