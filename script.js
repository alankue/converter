function cmConverter(){
    document.converter.inch.value = document.converter.cm.value / 2.54
    document.converter.feet.value = document.converter.cm.value / 30.48
    document.converter.cubit.value = document.converter.cm.value / 44.5
    }
    function inchConverter(){
    document.converter.cm.value = document.converter.inch.value * 2.54
    document.converter.feet.value = document.converter.inch.value / 12
    document.converter.cubit.value = document.converter.inch.value / 17.52
    }
    function feetConverter(){
    document.converter.cm.value = document.converter.feet.value * 30.48
    document.converter.inch.value = document.converter.feet.value * 12
    document.converter.cubit.value = document.converter.feet.value / 1.459973745
    }
    function cubitConverter(){
    document.converter.cm.value = document.converter.cubit.value * 44.5
    document.converter.inch.value = document.converter.cubit.value * 17.52
    document.converter.feet.value = document.converter.cubit.value * 1.459973745
    }
