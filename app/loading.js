export default function loading() {
    return (
        <div className="h-screen w-full text-white relative">
            <div className="w-full h-full flex justify-center flex-col items-center">
                <h1 className="headertin text-3xl md:text-6xl fixed top-5 left-10">ADG.</h1>
                <div class="loader">
                    <p>loading</p>
                    <div class="words">
                    <span class="word">Interface</span>
                    <span class="word">Dataset</span>
                    <span class="word">Graphics</span>
                    <span class="word">Aesthet</span>
                    <span class="word">Operation</span>
                    </div>
                </div>
            </div>
        </div>
    );
}