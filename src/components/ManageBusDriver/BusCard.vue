<template>
  <div class="bus-card rounded mb-3">
    <div>
      <span>
        {{ busID.slice(0, 7) }} | {{ plate }}
        <button
          class="btn edit-btn thai ml-3"
        >
          <i class="far fa-edit"/>
        </button>
        <button data-toggle="modal" :data-target="`#${bus}`" class="btn del-btn thai ml-1">
          <i class="far fa-trash-alt"/>
        </button>
      </span>
    </div>
    <div>คนขับ : {{ driverName }}</div>
    <div>กลุ่มนักเรียน : {{ studentGroup }}</div>
  </div>
</template>

<script>
export default {
  props: {
    busID: {
      type: String,
      default: ''
    },
    plate: {
      type: String,
      default: ''
    },
    driverName: {
      type: String,
      default: ''
    },
    studentGroup: {
      type: Number,
      default: 0
    },
    bus: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
  .bus-card {
    padding: 1em;
    border: 0.5pt solid rgb(236, 235, 243);
    background: white;
  }

  .edit-btn {
    border: 0.5pt solid rgb(236, 235, 243);
    border-radius: 15px;
  }

  .edit-btn i {
    color: rgb(242, 108, 37);
  }

  .del-btn {
    border: 0.5pt solid rgb(236, 235, 243);
    border-radius: 15px;
  }

  .del-btn {
    color: rgb(229, 23, 23);
  }
</style>
