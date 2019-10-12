<template>
  <div
    class="modal fade"
    id="qrModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="qrModalCenterTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog thai modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="qrModalLongTitle">Alert</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body d-flex justify-content-center">
          <span>ไม่รองรับไฟล์ที่เลือก โปรดเลือกไฟล์นามสกุล .jpg .png .ico</span>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>
