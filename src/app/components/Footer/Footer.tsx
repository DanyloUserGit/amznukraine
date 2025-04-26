import Link from "next/link";
import { Logo } from "../svg/Logo";

export const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__content-block">
                    <div className="footer__content-block-logo" aria-label="amznukraine.com">
                        <Logo />
                        <p className="footer__content-block-logo-info">Доставляємо товари з Amazon в Україну швидко та безпечно.</p>
                    </div>
                    <nav>
                        <span className="footer__content-block-title">Навігація</span>
                        <ul className="footer__content-block-links">
                            <li><Link href="/" className="footer__content-block-links-link">Головна</Link></li>
                            <li><Link href="/parcel" className="footer__content-block-links-link">Відстежити посилку</Link></li>
                            <li><Link href="/calculator" className="footer__content-block-links-link">Калькулятор</Link></li>
                            <li><Link href="/price" className="footer__content-block-links-link">Вартість</Link></li>
                        </ul>
                    </nav>
                    <nav>
                        <span className="footer__content-block-title">Контакти</span>
                        <address className="footer__content-block-contacts">
                            <p>Email: <a href="mailto:amznukraine@ukr.net">amznukraine@ukr.net</a></p>
                            <p>Телефон: <a href="tel:+380682620826">+38 (068) 262-08-26</a></p>
                            <p>м. Львів, Україна</p>
                        </address>
                    </nav>
                </div>
                <small className="footer__content-copywrite">© 2025 Amzn Ukraine. Всі права захищені.</small>
            </div>
        </footer>
    );
}