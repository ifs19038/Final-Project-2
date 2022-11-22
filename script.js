function contoh(){
  Swal.fire({
    title: 'Kamu yakin dengan pesanan mu?',
    text: "",
    icon: 'warning',
    showCancelButton: true,
    cancelButtonColor: '#d33',
    confirmButtonColor: '#379237',
    cancelButtonText: 'Nanti deh',
    confirmButtonText: 'Pastinya'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Pesanan telah diterima',
        'Pesanan anda akan segera dikerjakan',
        'success'
      )
    }
  })
}