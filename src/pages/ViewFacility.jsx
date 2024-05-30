import "../assets/css/view.css"

const ViewFacility = () => {
  return (
    <>

    <main>
        <div class="grid-2 container">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.1587741959256!2d37.07609417472407!3d-1.0418126989481593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f4e8ba254f96f%3A0x6d75a7afc56314f6!2sThika%20Level%205%20Hospital!5e0!3m2!1sen!2ske!4v1716376979166!5m2!1sen!2ske" width="700" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>



            <div class="text flex-column x-start">
                <h1 class="txt-primary">Thika Level 5 Hospital</h1>
                <p> <i class="fas fa-map-marker txt-primary"></i> Thika Subcounty</p>
                <p> <i class="fas fa-hospital txt-primary"></i> Jomoko Ward</p>
                <p> <i class="fas fa-check-circle txt-primary"></i> HIV Testing Services </p>
                <p> <i class="fas fa-check-circle txt-primary"></i> PreEP Services </p>
                <p> <i class="fas fa-check-circle txt-primary"></i> PmTCT Services </p>
            </div>


        </div>
    </main>

    </>
  )
}

export default ViewFacility