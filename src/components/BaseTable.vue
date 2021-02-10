<template>
  <div class="table-wrapper">
    <table
        v-if="hasData"
    >
      <thead>
      <tr>
        <th>Type stats</th>
        <th
            v-for="item in items[0].data"
            :key="item.date"
        >{{ new Date (item.date).toLocaleDateString().substring(0, 10) }}</th>
      </tr>
      </thead>
      <tbody>
      <tr
          v-for="item in items"
          :key="item.name"
      >
        <td>{{ item.name }}</td>
        <td
            v-for="elem in item.data"
            :key="elem.date"
        >{{ elem.value }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'BaseTable',
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters(['hasData', 'items'])
  },
  methods: {
  },
}
</script>

<style scoped>
.table-wrapper {
  overflow-x: scroll;
  box-shadow: 10px 10px 5px -8px rgba(176, 176, 176, 1);
}

table {
  border: 1px solid #909497;
  border-collapse: collapse;
}

th, td {
  padding: 8px;
  border: 1px solid #909497;
  transition: all .3s ease;
}

th, td:first-child {
  text-align: center;
  font-weight: bold;
  text-transform: uppercase;
}

th:hover, td:hover {
  background: #F4F6F7;
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