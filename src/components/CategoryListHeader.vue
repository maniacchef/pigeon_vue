//現在未参照。
//props学習用に残しておきます。
<script>
export default {
    props: {
        category: {
            type: Object,
            required: true
        }
    }
}
</script>

<template>
    <div class="col-12 m-2">
        <div class="float-start ">
            <tr>
            <td class="text-left">{{ category.category_name }}</td>
            <td class="text-left">{{ category.description }}</td>
            </tr>
        </div>
    </div>
</template>
