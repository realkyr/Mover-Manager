<template>
  <div class="thai statebar">
    <ul>
      <li>
        <!-- <vs-row vs-type="flex" vs-justify="center" vs-align="center"> -->
        <div class="row pl-3 pr-3 d-flex justify-content-center align-items-center">
          <div id="schoolbus-icon">
            <schoolbus class="svg" width="19" height="19" />
          </div>
          <span class="label-state">รถทั้งหมด</span>
          <span id="allbus-number">{{allBus}}</span>
        <!-- </vs-row> -->
        </div>
      </li>
      <li>
        <!-- <vs-row vs-type="flex" vs-justify="center" vs-align="center"> -->
        <div class="row pl-3 pr-3 d-flex justify-content-center align-items-center">
          <div id="active-icon">
            <active class="svg" width="18" height="18" />
          </div>
          <span class="label-state">รถที่วิ่งอยู่</span>
          <span id="active-number">{{active}}</span>
        <!-- </vs-row> -->
        </div>
      </li>
      <li>
        <!-- <vs-row vs-type="flex" vs-justify="center" vs-align="center"> -->
        <div class="row pl-3 pr-3 d-flex justify-content-center align-items-center">
          <div id="road-icon">
            <road class="svg" width="18" height="18" />
          </div>
          <span class="label-state">เส้นทาง</span>
          <span id="road-number">{{road}}</span>
        <!-- </vs-row> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import schoolbus from './icons/schoolbus.vue'
import active from './icons/active.vue'
import road from './icons/road.vue'

export default {
  components: {
    schoolbus,
    active,
    road
  },
  props: {
    allBus: {
      type: Number,
      default: 0
    },
    active: {
      type: Number,
      default: 0
    },
    road: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style>

.statebar ul {
  list-style: none;
}

.statebar li {
  display: inline-block;
  padding: 0.5em 1em 0.5em 1em;
  background: white;
  text-align: center;
  margin-right: 1em;
  font-size: 10pt;
  border-radius: 10px;
}

#schoolbus-icon,
#active-icon,
#road-icon {
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 27pt;
  width: 27pt;
}

.svg path {
  fill: white;
}

.label-state {
  display: block;
}

#schoolbus-icon {
  background: rgb(95,182,227);
  background: linear-gradient(117deg, rgba(95,182,227,1) 83%, rgba(37,148,188,1) 100%);
}

#active-icon {
  background: rgb(155,239,41);
  background: linear-gradient(117deg, rgba(155,239,41,1) 0%, rgba(135,219,20,1) 100%);
}

#road-icon {
  background: rgb(245,136,8);
  background: linear-gradient(117deg, rgba(245,136,8,1) 0%, rgba(242,108,37,1) 100%);
}

#active-icon path {
  fill: white;
}

.label-state,
#allbus-number,
#active-number,
#road-number {
  margin-left: 1em;
}

#allbus-number {
  color: #2094b9;
}

#active-number {
  color: #87DB14;
}

#road-number {
  color: #F26C25;
}

@media screen and (max-width: 600px){
  .label-state {
    display: none;
  }

  .statebar li {
    margin-right: 0.3em;
  }
}

@media screen and (max-width: 400px){
  .statebar li {
    padding: 0.2em 0.5em 0.2em 0.5em;
  }
  .label-state,
  #allbus-number,
  #active-number,
  #road-number {
    margin-left: 0.5em;
  }
}

</style>
