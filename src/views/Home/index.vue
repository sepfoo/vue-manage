<template>
  <el-row class="home" :gutter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="hover">
        <div class="user">
          <img :src="userImg" />
          <div class="userInfo">
            <p class="name">Admin</p>
            <p class="access">Admin</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录实践：<span>2021</span></p>
          <p>上次登录地点：<span>亳州</span></p>
        </div>
      </el-card>
      <el-card style="margin-top: 20px; height: 460px">
        <el-table :data="tableData">
          <el-table-column
            v-for="(val, index) in tableLabel"
            :key="index"
            :prop="index"
            :label="index"
          ></el-table-column>
        </el-table>
      </el-card>
    </el-col>
    <el-col :span="16" style="margin-top: 20px">
      <div class="num">
        <el-card
          v-for="(item, index) in cuntData"
          :key="index"
          body-style="{display:'flex';padding:0}"
        >
          <i
            class="icon"
            :class="`el-icon-${item.icon}`"
            :style="{ background: item.color }"
          ></i>
          <div class="detail">
            <p class="num">{{ item.value }}</p>
            <p class="txt">{{ item.name }}</p>
          </div>
        </el-card>
      </div>
      <el-card style="height: 280px">
        <div style="height: 280px" ref="echarts"></div>
      </el-card>
      <div class="graph">
        <el-card style="height: 260px">
          <div style="height: 240px" ref="userEcharts"></div>
        </el-card>
        <el-card style="height: 260px">
          <div style="height: 240px" ref="videoEcharts"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import { getMenu, getData } from "@/api/data";
import * as echarts from "echarts";
export default {
  name: "ViewsHome",
  data() {
    return {
      userImg: require("@/assets/images/user.png"),
      tableData: [],
      tableLabel: {
        name: "名称",
        todaybuy: "1",
        monbuy: "2",
        totle: "3",
      },
      cuntData: [
        {
          name: "eee",
          value: 333,
          icon: "success",
          color: "#dadf44",
        },
        {
          name: "eee",
          value: 333,
          icon: "success",
          color: "#dadf44",
        },
        {
          name: "eee",
          value: 333,
          icon: "success",
          color: "#dadf44",
        },
        {
          name: "eee",
          value: 333,
          icon: "success",
          color: "#dadf44",
        },
        {
          name: "eee",
          value: 333,
          icon: "success",
          color: "#dadf44",
        },
        {
          name: "eee",
          value: 333,
          icon: "success",
          color: "#dadf44",
        },
      ],
    };
  },
  mounted() {
    getMenu()
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    getData().then((res) => {
      const { code, data } = res.data;
      if (code === 20000) {
        this.tableData = data.tableData;

        const order = data.orderData;
        // console.log(order);

        const xData = order.date;

        const keyArray = Object.keys(order.data[0]);
        // console.log(keyArray);

        const series = [];

        keyArray.forEach((key) => {
          series.push({
            name: key,
            data: order.data.map((item) => item[key]),
            type: "line",
          });
        });
        console.log(series);
        const option = {
          xAxis: {
            data: xData,
          },
          yAxis: {},
          legend: {
            data: keyArray,
          },
          series,
        };
        const e = echarts.init(this.$refs.echarts);
        e.setOption(option);

        //userEcharts
        const userOption = {
          legend: {
            // 图例文字颜色
            textStyle: {
              color: "#333",
            },
          },
          grid: {
            left: "20%",
          },
          // 提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category", // 类目轴
            data: data.userData.map(item => item.date),
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "#b6a2de"],
          series: [
            {
              name: '新增用户',
              data: data.userData.map(item => item.new),
              type: 'bar'
            },
            {
              name: '活跃用户',
              data: data.userData.map(item => item.active),
              type: 'bar'
              // bar 表示柱状图
            }
          ],
        }
        const U = echarts.init(this.$refs.userEcharts)
        U.setOption(userOption)



         // // 饼图
        const videoOption = {
          tooltip: {
            trigger: "item",
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf",
          ],
          series: [
            {
              data: data.videoData,
              type: 'pie'
            }
          ],
        }
        const V = echarts.init(this.$refs.videoEcharts)
        V.setOption(videoOption)

      }

      // console.log(res)
    });
  },
};
</script>
<style lang="less" scoped>
</style>