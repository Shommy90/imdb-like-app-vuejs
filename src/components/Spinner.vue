<template>
    <div class="spinner-holder">
        <div class="spinner"></div>
    </div>
</template>

<script>
export default {
    name: "Spinner"
}
</script>

<style>

.spinner-holder {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 50px;
}

.spinner {
    border: 6px solid #f3f3f3;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 0.5s linear infinite;
    border-top: 6px solid #17a2b8;
    border-radius: 50%;
    width: 80px;
    height: 80px;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>